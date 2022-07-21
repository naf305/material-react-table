import { MaterialReactTableProps } from 'material-react-table';

export type PropRow = {
  defaultValue?: string;
  description?: string;
  link?: string;
  linkText?: string;
  propName: keyof MaterialReactTableProps;
  required?: boolean;
  source?: 'MRT' | 'TanStack Table' | 'Material UI' | '';
  type?: string;
};

export const rootProps = [
  {
    propName: 'aggregationFns',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'TanStack Table',
    type: '',
  },
  {
    propName: 'autoResetAll',
    defaultValue: '',
    description:
      'Set this option to override any of the autoReset... feature options.',
    link: 'https://tanstack.com/table/v8/docs/api/core/table#autoresetall',
    linkText: 'TanStack Table Table Core Options Docs',
    required: false,
    source: 'TanStack Table',
    type: 'boolean',
  },
  {
    propName: 'autoResetExpanded',
    defaultValue: '',
    description:
      'Enable this setting to automatically reset the expanded state of the table when grouping state changes.',
    link: 'https://tanstack.com/table/v8/docs/api/features/expanding#autoresetexpanded',
    linkText: 'TanStack Table Expanding Docs',
    required: false,
    source: 'TanStack Table',
    type: 'boolean',
  },
  {
    propName: 'autoResetPagination',
    defaultValue: '',
    description:
      'If set to true, pagination will be reset to the first page when page-altering state changes eg. data is updated, filters change, grouping changes, etc.',
    link: 'https://tanstack.com/table/v8/docs/api/features/pagination#autoresetpagination',
    linkText: 'TanStack Table Pagination Docs',
    required: false,
    source: 'TanStack Table',
    type: 'boolean',
  },
  {
    propName: 'columnResizeMode',
    defaultValue: "'onEnd'",
    description:
      'Determines when the columnSizing state is updated. onChange updates the state when the user is dragging the resize handle. onEnd updates the state when the user releases the resize handle.',
    link: 'https://tanstack.com/table/v8/docs/api/features/column-sizing#columnresizemode',
    linkText: 'TanStack Table Column Sizing Docs',
    required: false,
    source: 'TanStack Table',
    type: "'onEnd' | 'onChange'",
  },
  {
    propName: 'columns',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: true,
    source: 'TanStack Table',
    type: 'Array<MRT_ColumnDef<TData>>',
  },
  {
    propName: 'data',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: true,
    source: 'TanStack Table',
    type: 'Array<TData>',
  },
  {
    propName: 'debugAll',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'debugColumns',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'debugHeaders',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'debugRows',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'debugTable',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'defaultColumn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'displayColumnDefOptions',
    defaultValue: '',
    description:
      'Customize and override the column definition options for the built-in display columns. (Select, Expand, Row Actions, etc.)',
    link: '',
    linkText: '',
    required: false,
    source: 'MRT',
    type: '{ [key: string]: MRT_ColumnDef<TData> }',
  },
  {
    propName: 'editingMode',
    defaultValue: "'row'",
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: "'cell' | 'row' | 'table'",
  },
  {
    propName: 'enableClickToCopy',
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableColumnActions',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableColumnDragging',
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableColumnFilterChangeMode',
    defaultValue: 'false',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableColumnFilters',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableColumnOrdering',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableColumnResizing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableDensityToggle',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableEditing',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableExpandAll',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableExpanding',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'TanStack Table',
    type: 'boolean',
  },
  {
    propName: 'enableFilters',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableFullScreenToggle',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableGlobalFilter',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableGlobalFilterChangeMode',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableGlobalFilterRankedResults',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableGrouping',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableHiding',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableMultiRemove',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableMultiRowSelection',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableMultiSort',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enablePagination',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enablePinning',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableRowActions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableRowDragging',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableRowNumbers',
    defaultValue: '',
    description: '',
    link: '/docs/guides/row-numbers',
    linkText: 'Row Numbers Feature Guide',
    required: false,
    source: 'MRT',
    type: 'boolean',
  },
  {
    propName: 'enableRowOrdering',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableRowSelection',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableRowVirtualization',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'MRT',
    type: 'boolean',
  },
  {
    propName: 'enableSelectAll',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableSorting',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableSortingRemoval',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableStickyHeader',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableSubRowSelection',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableTableFooter',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableTableHead',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableToolbarBottom',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableToolbarInternalActions',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'enableToolbarTop',
    defaultValue: 'true',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'boolean',
  },
  {
    propName: 'columnFilterModeOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'enabledGlobalFilterOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'expandRowsFn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'filterFromLeafRows',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getColumnCanGlobalFilter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getCoreRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getExpandedRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getFacetedMinMaxValues',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getFacetedRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getFacetedUniqueValues',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getFilteredRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getGroupedRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getIsRowExpanded',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getPaginationRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getRowCanExpand',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getRowId',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getSortedRowModel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'getSubRows',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'globalFilterFn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'groupedColumnMode',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'icons',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'initialState',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'isMultiSortEvent',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'key',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'localization',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'manualExpanding',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'manualFiltering',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'manualGrouping',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'manualPagination',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'manualSorting',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'maxMultiSortColCount',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'mergeOptions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'meta',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'TanStack Table',
    type: '',
  },
  {
    propName: 'muiExpandAllButtonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiExpandButtonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiLinearProgressProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: 'LinearProgressProps | ({ isTopToolbar, table }) => LinearProgressProps',
  },
  {
    propName: 'muiSearchTextFieldProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiSelectAllCheckboxProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiSelectCheckboxProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyCellCopyButtonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyCellEditTextFieldProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyCellProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyCellSkeletonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyRowDragHandleProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableBodyRowProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableContainerProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableDetailPanelProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableFooterCellProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableFooterProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableFooterRowProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableHeadCellColumnActionsButtonProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableHeadCellDragHandleProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'Material UI',
    type: '',
  },
  {
    propName: 'muiTableHeadCellFilterTextFieldProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTableHeadCellProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTableHeadProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTableHeadRowProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTablePaginationProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTablePaperProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/paper/',
    linkText: 'MUI Paper API Docs',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTableProps',
    defaultValue: '',
    description: '',
    link: 'https://mui.com/material-ui/api/table/',
    linkText: 'MUI TableProps API Docs',
    required: false,
    source: 'Material UI',
    type: 'TableProps',
  },
  {
    propName: 'muiTableToolbarAlertBannerProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTableToolbarBottomProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'muiTableToolbarTopProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnDrop',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnFiltersChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnOrderChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnPinningChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnSizingChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnSizingInfoChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onColumnVisibilityChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCurrentDraggingColumnChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCurrentEditingCellChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCurrentEditingRowChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCurrentFilterFnsChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCurrentGlobalFilterFnChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCurrentHoveredColumnChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onExpandedChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onGlobalFilterChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onGroupingChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onDensityChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onIsFullScreenChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCellEditBlur',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onCellEditChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onEditRowSubmit',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onPaginationChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onRowDrop',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onRowSelectionChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onShowAlertBannerChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onShowFiltersChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onShowGlobalFilterChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onSortingChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onStateChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'onTableInstanceChange',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'pageCount',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'number',
  },
  {
    propName: 'paginateExpandedRows',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'positionActionsColumn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'MRT',
    type: "'first' | 'last'",
  },
  {
    propName: 'positionExpandColumn',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: 'MRT',
    type: "'first' | 'last'",
  },
  {
    propName: 'positionGlobalFilter',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'positionPagination',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'positionToolbarAlertBanner',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'renderDetailPanel',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'renderRowActionMenuItems',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'renderRowActions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'renderToolbarBottomCustomActions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'renderToolbarTopCustomActions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'renderToolbarInternalActions',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'rowCount',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: 'number',
  },
  {
    propName: 'rowNumberMode',
    defaultValue: "'original'",
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: "'original' | 'static'",
  },
  {
    propName: 'selectAllMode',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'sortDescFirst',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'sortingFns',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'state',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'tableId',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
  {
    propName: 'virtualizerProps',
    defaultValue: '',
    description: '',
    link: '',
    linkText: '',
    required: false,
    source: '',
    type: '',
  },
] as PropRow[];
