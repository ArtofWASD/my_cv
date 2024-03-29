
export interface IStackItem {
  title: string
  imgUrl: string
}

export interface IPrewievProjectListItem {
  item: {
    id: number
    title: string
    body: string
    imageUrl: string
    ginhubUrl: string
    stack: IStackItem[]
  }
}

export interface PageProps {
  params: {
    type: string;
  };
  searchParams?: {
    page: number;
  };
}
