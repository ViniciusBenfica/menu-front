export default interface Iitem {
  id: number;
  name: string;
  items: {
    id: number;
    name: string;
    description: string;
  }[];
}
