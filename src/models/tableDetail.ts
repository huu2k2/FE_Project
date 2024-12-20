export class TableDetailModel {
  tableDetailId!: string;
  tableId!: string;
  orderId!: string;
  note?: string | null;
  startTime!: Date;
  endTime?: Date | null;
  createdAt!: Date;
  updatedAt?: Date | null;
}
