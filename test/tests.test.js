import { describe, expect, it } from 'vitest';
import { convert } from '../src/index';

describe('Test all the functionality', () => {
  it('should return a conversion result with value and unit', () => {
    const result = convert(5, 'kg');
    expect(result.value).toBe(5);
    expect(result.unit).toBe('kg');
    expect(typeof result.to).toBe('function');
  });

  it('should allow method chaining', () => {
    const result = convert(1, 'kg').to('g').to('ounces');
    expect(result.value).toBeCloseTo(35.274);
    expect(result.unit).toBe('ounces');
  });

  it('should handle decimal values', () => {
    const result = convert(2.5, 'kg').to('pounds');
    expect(result.value).toBeCloseTo(5.51155);
    expect(result.unit).toBe('pounds');
  });

  it('should handle zero values', () => {
    const result = convert(0, 'meters').to('feet');
    expect(result.value).toBe(0);
    expect(result.unit).toBe('feet');
  });

  it('should handle negative values', () => {
    const result = convert(-5, 'kg').to('pounds');
    expect(result.value).toBeCloseTo(-11.0231);
    expect(result.unit).toBe('pounds');
  });

  // Length conversions
  it('should handle same unit conversion', () => {
    const result = convert(5, 'meters').to('meters');
    expect(result.value).toBe(5);
    expect(result.unit).toBe('meters');
  });

  it('should convert meters to kilometers', () => {
    const result = convert(1000, 'meters').to('km');
    expect(result.value).toBe(1);
    expect(result.unit).toBe('km');
  });

  it('should convert kilometers to meters', () => {
    const result = convert(1, 'km').to('meters');
    expect(result.value).toBe(1000);
    expect(result.unit).toBe('meters');
  });

  it('should convert meters to feet', () => {
    const result = convert(1, 'meters').to('feet');
    expect(result.value).toBeCloseTo(3.28084);
    expect(result.unit).toBe('feet');
  });

  it('should convert feet to meters', () => {
    const result = convert(3.28084, 'feet').to('meters');
    expect(result.value).toBeCloseTo(1);
    expect(result.unit).toBe('meters');
  });

  it('should convert inches to meters', () => {
    const result = convert(39.3701, 'inches').to('meters');
    expect(result.value).toBeCloseTo(1);
    expect(result.unit).toBe('meters');
  });

  it('should convert miles to kilometers', () => {
    const result = convert(1, 'miles').to('km');
    expect(result.value).toBeCloseTo(1.60934);
    expect(result.unit).toBe('km');
  });

  it('should convert yards to meters', () => {
    const result = convert(5, 'yards').to('meters');
    expect(result.value).toBeCloseTo(4.572);
    expect(result.unit).toBe('meters');
  });

  // Mass conversions
  it('should handle same unit conversion', () => {
    const result = convert(5, 'kg').to('kg');
    expect(result.value).toBe(5);
    expect(result.unit).toBe('kg');
  });

  it('should convert kg to grams', () => {
    const result = convert(1, 'kg').to('g');
    expect(result.value).toBe(1000);
    expect(result.unit).toBe('g');
  });

  it('should convert kg to pounds', () => {
    const result = convert(1, 'kg').to('pounds');
    expect(result.value).toBeCloseTo(2.20462);
    expect(result.unit).toBe('pounds');
  });

  it('should convert pounds to kg', () => {
    const result = convert(2.20462, 'pounds').to('kg');
    expect(result.value).toBeCloseTo(1);
    expect(result.unit).toBe('kg');
  });

  it('should convert pounds to g', () => {
    const result = convert(2.20462, 'pounds').to('g');
    expect(result.value).toBeCloseTo(1000);
    expect(result.unit).toBe('g');
  });

  it('should convert grams to ounces', () => {
    const result = convert(1000, 'g').to('ounces');
    expect(result.value).toBeCloseTo(35.274);
    expect(result.unit).toBe('ounces');
  });

  it('should convert ounces to grams', () => {
    const result = convert(35.274, 'ounces').to('g');
    expect(result.value).toBeCloseTo(1000);
    expect(result.unit).toBe('g');
  });
});