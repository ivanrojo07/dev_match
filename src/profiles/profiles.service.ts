import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    { id: randomUUID(), name: 'Alice', age: 30 },
    { id: randomUUID(), name: 'Bob', age: 25 },
    { id: randomUUID(), name: 'Charlie', age: 35 },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const profile = this.profiles.find((profile) => profile.id === id);
    if (!profile) {
      throw new Error(`Profile with id ${id} not found`);
    }
    return profile;
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = { id: randomUUID(), ...createProfileDto };
    this.profiles.push(newProfile);
    return newProfile;
  }
  update(id: string, updateProfileDto: UpdateProfileDto) {
    const index = this.profiles.findIndex((profile) => profile.id === id);
    if (index !== -1) {
      this.profiles[index] = { ...this.profiles[index], ...updateProfileDto };
    } else {
      throw new Error(`Profile with id ${id} not found`);
    }
    return this.profiles[index];
  }

  remove(id: string) {
    if (!this.findOne(id)) {
      throw new Error(`Profile with id ${id} not found`);
    }
    this.profiles = this.profiles.filter((profile) => profile.id !== id);
  }
}
