# Redux Toolkit

Redux Toolkit provides a structured approach to shared client state with slices, reducers, middleware and developer tooling.

## Example slice
```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ReviewState = { selectedPaymentId: string | null };
const initialState: ReviewState = { selectedPaymentId: null };

const reviewSlice = createSlice({
  name: "paymentReview",
  initialState,
  reducers: {
    selectPayment(state, action: PayloadAction<string | null>) {
      state.selectedPaymentId = action.payload;
    }
  }
});

export const { selectPayment } = reviewSlice.actions;
export default reviewSlice.reducer;
```

## When it helps
- Multiple distant components coordinate shared client state.
- State transitions need to be explicit and inspectable.
- Middleware and predictable workflows add value.
- A team benefits from consistent conventions.

## Avoid
- Mirroring every backend response into Redux without a reason.
- Creating one giant slice for unrelated domains.
- Storing derived values that can be calculated from existing state.
- Treating Redux as a substitute for backend authorization.

## Exercise
Model a payment-review queue with selected payment, filter criteria and a draft approval note. Keep remote payment records in a server-state layer.
