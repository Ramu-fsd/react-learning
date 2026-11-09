import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type PaymentRecord = {
  id: string;
  beneficiary: string;
  amount: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
};

type PaymentState = { records: PaymentRecord[]; selectedPaymentId: string | null };

const initialState: PaymentState = {
  records: [
    { id: 'PMT-201', beneficiary: 'Northstar Supplies', amount: 12500, status: 'PENDING' },
    { id: 'PMT-202', beneficiary: 'Aster Technologies', amount: 8400, status: 'APPROVED' },
    { id: 'PMT-203', beneficiary: 'Meridian Logistics', amount: 3200, status: 'PENDING' },
  ],
  selectedPaymentId: null,
};

const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    selectPayment(state, action: PayloadAction<string | null>) {
      state.selectedPaymentId = action.payload;
    },
    updateStatus(state, action: PayloadAction<{ id: string; status: PaymentRecord['status'] }>) {
      const payment = state.records.find((item) => item.id === action.payload.id);
      if (payment) payment.status = action.payload.status;
    },
  },
});

export const { selectPayment, updateStatus } = paymentSlice.actions;
export default paymentSlice.reducer;
