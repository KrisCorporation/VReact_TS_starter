import { createSlice } from "@reduxjs/toolkit";

export const nodesSlice = createSlice({
  name: "nodes",
  initialState: {
    storeNodes: {},
    screenPos : {},
    selectedNode: 0,
    selectedPin: [],
    pinRefresh: false
  },
  reducers: {
    init: (state, actions) => {
      state.storeNodes = actions.payload;
    },
    setSelectedNode: (state,payload)=>{
      state.selectedNode = payload.payload
    },
    changePosition : (state, actions)=>{
      state.storeNodes.nodes[actions.payload[0]].position = actions.payload[1]
    },
    changeScreenPos : (state, actions)=>{
      state.screenPos = actions.payload
    },
    addPin: (state,actions) => {
      // state.storeNodes. .pins.filter(pin=>pin.id == actions.payload)
    },
    selecPinToggle: (state, actions)=>{
      state.storeNodes.nodes[actions.payload.cptIdx].pins[actions.payload.itemIdx].selected = !state.storeNodes.nodes[actions.payload.cptIdx].pins[actions.payload.itemIdx].selected
    },
    forcePinStatus: (state, actions)=>{
      state.storeNodes.nodes[actions.payload.cptIdx].pins[actions.payload.itemIdx].selected = actions.payload.selectValue
    },
    resetPinStatus: (state)=>{
      state.storeNodes.nodes.forEach(node=>{
        node.pins.forEach(pin=>{
            pin.selected = false
        })
    })},
    addOther: (state, actions) => {
      state.selectedPin.push(actions.payload);
    },
    removeOther: (state, actions) => {
      state.selectedPin = state.selectedPin.filter(
        (item:any) => item.id != actions.payload.id
      );
    },
    initOffset: (state,actions)=>{
      const itemValue = state.storeNodes.nodes[actions.payload.cptIdx].pins[actions.payload.itemIdx] 
      state.storeNodes.nodes[actions.payload.cptIdx].pins[actions.payload.itemIdx] = {...itemValue, ...actions.payload.pos }
    }, 
    addLink : (state, actions)=>{
      state.storeNodes.links.push(actions.payload)
      state.pinRefresh = state.pinRefresh ? false : true
      state.selectedPin = []
      // resetPinStatus(state)
    },
    addCpt : (state, actions)=>{
      state.storeNodes.nodes.push(actions.payload)
    }
  },
});

export const { 
  setSelectedNode, 
  changeScreenPos,
  changePosition,
  init, 
  addPin,
  addOther,
  removeOther,
  initOffset, 
  addLink,
  addCpt,
  selecPinToggle,
  forcePinStatus,
  resetPinStatus
} = nodesSlice.actions;
export default nodesSlice.reducer;


// {
//   type: 'nodes/changePosition',
//   payload: {
//     x: 0, 
//     y: 0
//   },
// }