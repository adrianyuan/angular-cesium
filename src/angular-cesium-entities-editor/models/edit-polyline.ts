import { AcEntity } from '../../angular-cesium/models/ac-entity';
import { Cartesian3 } from '../../angular-cesium/models/cartesian3';

export class EditPolyline extends AcEntity {
  static counter = 0;
  private editedEntityId: string;
  private id: string;
  private positions: Cartesian3[];

  constructor(entityId: string, startPosition: Cartesian3, endPosition: Cartesian3) {
    super();
    this.editedEntityId = entityId;
    this.id = this.generateId();
    this.positions = [startPosition, endPosition];
  }

  getEditedEntityId(): string {
    return this.editedEntityId;
  }

  getPositions(): any[] {
    return this.positions;
  }

  validatePositions(): boolean {
    return this.positions[0] !== undefined && this.positions[1] !== undefined;
  }

  getStartPosition() {
    return this.positions[0];
  }

  getEndPosition() {
    return this.positions[1];
  }

  setStartPosition(position) {
    this.positions[0] = position;
  }

  setEndPosition(position) {
    this.positions[1] = position;
  }

  getId(): string {
    return this.id;
  }

  private generateId(): string {
    return 'edit-polyline-' + EditPolyline.counter++;
  }
}
