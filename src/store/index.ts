import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      msg: "test",
      editMode: "edit",
      componentData: [] as any[],
    };
  },
  actions: {
    addComponent(data: any) {
      this.componentData.push(data);
    },
  },
});
