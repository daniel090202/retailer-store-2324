declare global {
  interface INotification {
    id: number;
    title: string;
    target: number;
    degree: number;
    type: number;
    content: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
  }
}

class Notification implements INotification {
  public id: number;
  public title: string;
  public target: number;
  public degree: number;
  public type: number;
  public content: string;
  public createdBy: string;
  public createdAt: string;
  public updatedAt: string;

  constructor(
    id: number,
    title: string,
    target: number,
    degree: number,
    type: number,
    content: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string
  ) {
    this.id = id;
    this.title = title;
    this.target = target;
    this.degree = degree;
    this.type = type;
    this.createdBy = createdBy;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { Notification };
