export type Tprofile = {
  id: 1,
  phone: string,
  firstName: string,
  lastName: string,
  nationalId: string,
  city: string,
  createdAt: string,
  wallet: {
    id: number,
    userId: number,
    balance: number,
    currency: string,
    updatedAt: string
  }
}