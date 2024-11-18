import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TestView from './TestView.vue';

describe('TestView', () => {
  it('muestra error cuando el campo está vacío', async () => {
    const wrapper = mount(TestView);
    const input = wrapper.find('input');

    await input.setValue('');
    await input.trigger('input');

    expect(wrapper.text()).toContain('El campo no puede quedar vacío');
  });

  it('muestra error cuando el código no tiene 8 dígitos', async () => {
    const wrapper = mount(TestView);
    const input = wrapper.find('input');

    await input.setValue('1234567');
    await input.trigger('input');

    expect(wrapper.text()).toContain(
      'El código debe contener exactamente 8 dígitos'
    );
  });

  it('muestra error cuando el código no está registrado', async () => {
    const wrapper = mount(TestView);
    const input = wrapper.find('input');

    await input.setValue('99999999');
    await input.trigger('input');

    expect(wrapper.text()).toContain(
      'El código no está registrado en el sistema'
    );
  });

  it('muestra mensaje de éxito cuando el código es válido', async () => {
    const wrapper = mount(TestView);
    const input = wrapper.find('input');

    await input.setValue('12345678');
    await input.trigger('input');

    expect(wrapper.text()).toContain('Código válido');
  });

  it('limita la entrada a 8 caracteres', async () => {
    const wrapper = mount(TestView);
    const input = wrapper.find('input');

    await input.setValue('123456789');

    expect(input.element.value).toBe('12345678');
  });
});
