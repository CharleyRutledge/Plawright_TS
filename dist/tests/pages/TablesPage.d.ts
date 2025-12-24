import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export declare class TablesPage extends BasePage {
    readonly URL = "https://practice-automation.com/tables/";
    readonly tableBody: Locator;
    readonly tableRows: Locator;
    readonly tableHeaders: Locator;
    readonly table: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    getTableRowCount(): Promise<number>;
    getTableColumnCount(): Promise<number>;
    getTableHeaders(): Promise<string[]>;
    getCellValue(rowIndex: number, columnIndex: number): Promise<string>;
    getRowData(rowIndex: number): Promise<string[]>;
    getAllTableData(): Promise<string[][]>;
    findRowByValue(columnIndex: number, value: string): Promise<number | -1>;
    getColumnData(columnIndex: number): Promise<string[]>;
    isTableVisible(): Promise<boolean>;
    clickCell(rowIndex: number, columnIndex: number): Promise<void>;
    clickRow(rowIndex: number): Promise<void>;
}
//# sourceMappingURL=TablesPage.d.ts.map