export default interface ITxHistory {
  id: number;
  source_account: string;
  type: string;
  created_at: string;
  asset_type: string;
  from: string;
  to: string;
  amount: string;
}
