import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PassType {
  DAILY = 'Daily Pass',
  MONTHLY = 'Monthly Pass'
}

export interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}