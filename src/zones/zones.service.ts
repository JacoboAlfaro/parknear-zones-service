import { Injectable } from '@nestjs/common';
import { ZonaAzul } from './entities/zone.entity';
import { CreateZonaDto } from './dto/create-zone.dto';
import { UpdateZonaDto } from './dto/update-zone.dto';

@Injectable()
export class ZonasService {
  private zonas: ZonaAzul[] = [];

  // 🔹 Crear
  create(createZonaDto: CreateZonaDto) {
    this.zonas.push(createZonaDto);
    return createZonaDto;
  }

  findAll() {
    return this.zonas;
  }

  findOne(id: number) {
    return this.zonas.find(z => z.id === id);
  }

  update(id: number, updateZonaDto: UpdateZonaDto) {
    const zona = this.findOne(id);

    if (!zona) {
      throw new Error('Zona no encontrada');
    }

    Object.assign(zona, updateZonaDto);
    return zona;
  }

  remove(id: number) {
    const index = this.zonas.findIndex(z => z.id === id);

    if (index === -1) {
      throw new Error('Zona no encontrada');
    }

    this.zonas.splice(index, 1);
    return { message: 'Zona eliminada' };
  }
}