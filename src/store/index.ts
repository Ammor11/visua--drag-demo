import { defineStore } from "pinia";
interface IObj {
  component: any;
  index: number;
}

export const useStore = defineStore("main", {
  state: () => {
    return {
      msg: "test",
      editMode: "edit",
      componentData: [] as any[],
      curCompnent: null,
      curComponentIndex: null,
    };
  },
  actions: {
    addComponent(data: any) {
      this.componentData.push(data);
    },
    setCurCompnent(state: any, obj: IObj) {
      state.curCompnent = obj.component;
      state.curComponentIndex = obj.index;
    },
  },
});
