import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}
  create(createPetInput: CreatePetInput) {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  findOne(id: number) {
    return this.petsRepository.findOneOrFail(id);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    const { name, type } = updatePetInput;
    return this.petsRepository.update({ id: id }, { name, type });
  }

  remove(id: number) {
    return this.petsRepository.delete(id);
  }
}
