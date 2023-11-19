export function incrementAction(state) {
    state.value += 1;
};

export function decrementAction(state) {
    state.value -= 1;
};

export function incrementByAmountAction(state, action) {
    state.value += action.payload;
}