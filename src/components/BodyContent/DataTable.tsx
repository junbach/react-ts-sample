import { DownloadOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import { Component, ReactNode } from "react";

import { Monster, monsterService } from "../../services/monster-service";

// Props of component DataTable
// @param {showCurrentTime} true to show current date time - default props is true
interface TableProps {
  showCurrentTime: boolean;
}

// State of component DataTable
// @param {data} list of record {Monster} fetched from api server
// @param {hasLoaded} true if data has been fetched
interface TableState {
  data: Monster[];
  hasLoaded: boolean;
}

// Type of column in table, extending from ColumnType of antd
// More: https://ant.design/components/table/#Column
interface ColumnTable extends ColumnType<Monster> {
  title: Capitalize<keyof Monster>;
  dataIndex: Lowercase<keyof Monster>;
  key: Lowercase<keyof Monster>;
}

// Data in row in table
interface CellTable extends Monster {
  key: Monster["id"];
}

// Define list of columns
const columns: ColumnTable[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    render: (locations: string[]) => locations.join(),
  },
];

export default class DataTable extends Component<TableProps, TableState> {
  // initial default value of state
  readonly state: TableState = {
    hasLoaded: false,
    data: [],
  };

  // default value of props if not set
  static defaultProps: TableProps = {
    showCurrentTime: true,
  };

  /**
   * Function to fetch data from api server and update to state
   */
  private fetchData = () => monsterService.get().then(data => this.setState({ data, hasLoaded: true }));

  render(): ReactNode {
    const { data, hasLoaded } = this.state;
    const { showCurrentTime } = this.props;
    const cellData: CellTable[] = data.map(it => ({ ...it, key: it.id }));
    return (
      <div>
        <h3>{showCurrentTime ? new Date().toLocaleString() : null}</h3>
        <Button type={"primary"} onClick={this.fetchData} icon={<DownloadOutlined />}>
          Fetch data
        </Button>
        <Table columns={columns} dataSource={cellData} />
      </div>
    );
  }
}
