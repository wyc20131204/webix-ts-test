let menu_data: Array<Object> = [
    { id: "6", value: "task", icon: "mdi mdi-comment-text" },
    {
      id: "1",
      value: "System",
      icon: "mdi mdi-table",
      data: [
        { id: "system_1", value: "system_test" },
        { id: "system_2", value: "system_test1" },
        { id: "system_3", value: "system_test2" },
      ],
    },
    {
      id: "2",
      value: "Workflow",
      icon: "mdi mdi-table",
      data: [
        { id: "workflow_1", value: "workflow(iframe)" },
        { id: "workflow_2", value: "workflow_config" },
        {
          id: "workflow_3",
          value: "Workflow_des",
          data: [{ id: "workflow_3_1", value: "des_1" }],
        },
      ],
    },
    {
      id: "3",
      value: "EPBP",
      icon: "mdi mdi-table",
      data: [{ id: "zj_3", value: "oil" }],
    },
  ];

export const menuRecords = new webix.DataCollection({ 
    data:menu_data
});
