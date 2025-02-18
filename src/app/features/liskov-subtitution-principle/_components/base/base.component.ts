export abstract class BaseComponent {
  items: string[] = [];
  abstract fetchItem(): void;

  displayItems(): void {
    console.log('Items:', this.items.join(', '));
  }
}
