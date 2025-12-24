"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesPage = void 0;
const BasePage_1 = require("./BasePage");
class TablesPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/tables/';
        this.table = page.locator('table');
        this.tableBody = page.locator('tbody');
        this.tableRows = page.locator('tbody tr');
        this.tableHeaders = page.locator('thead th');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async getTableRowCount() {
        return await this.tableRows.count();
    }
    async getTableColumnCount() {
        return await this.tableHeaders.count();
    }
    async getTableHeaders() {
        const headers = [];
        const headerCount = await this.tableHeaders.count();
        for (let i = 0; i < headerCount; i++) {
            const header = await this.tableHeaders.nth(i).textContent() || '';
            headers.push(header.trim());
        }
        return headers;
    }
    async getCellValue(rowIndex, columnIndex) {
        const cell = this.page.locator(`tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${columnIndex + 1})`);
        return await this.getText(cell);
    }
    async getRowData(rowIndex) {
        const cells = [];
        const cellCount = await this.page.locator(`tbody tr:nth-child(${rowIndex + 1}) td`).count();
        for (let i = 0; i < cellCount; i++) {
            const cell = this.page.locator(`tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${i + 1})`);
            cells.push(await this.getText(cell));
        }
        return cells;
    }
    async getAllTableData() {
        const tableData = [];
        const rowCount = await this.getTableRowCount();
        for (let i = 0; i < rowCount; i++) {
            const rowData = await this.getRowData(i);
            tableData.push(rowData);
        }
        return tableData;
    }
    async findRowByValue(columnIndex, value) {
        const rowCount = await this.getTableRowCount();
        for (let i = 0; i < rowCount; i++) {
            const cellValue = await this.getCellValue(i, columnIndex);
            if (cellValue.includes(value)) {
                return i;
            }
        }
        return -1;
    }
    async getColumnData(columnIndex) {
        const columnData = [];
        const rowCount = await this.getTableRowCount();
        for (let i = 0; i < rowCount; i++) {
            const cellValue = await this.getCellValue(i, columnIndex);
            columnData.push(cellValue);
        }
        return columnData;
    }
    async isTableVisible() {
        return await this.isVisible(this.table);
    }
    async clickCell(rowIndex, columnIndex) {
        const cellLocator = this.page.locator(`tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${columnIndex + 1})`);
        await this.click(cellLocator);
    }
    async clickRow(rowIndex) {
        const rowLocator = this.page.locator(`tbody tr:nth-child(${rowIndex + 1})`);
        await this.click(rowLocator);
    }
}
exports.TablesPage = TablesPage;
//# sourceMappingURL=TablesPage.js.map