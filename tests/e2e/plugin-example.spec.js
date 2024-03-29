import { expect } from 'chai';
import '../../src/index';
import { setup } from '@playkit-js/kaltura-player-js';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';

describe('Upper Bar Manager', () => {
  let player;

  before(() => {
    const element = document.createElement('DIV');
    element.id = targetId;
    document.body.appendChild(element);
  });

  after(() => {
    document.getElementById(targetId).remove();
  });

  afterEach(() => {
    player.destroy();
    for (const element of document.getElementsByTagName('video')) {
      element.remove();
    }
  });

  it('Plugin configured properly', async () => {
    // Given
    player = setup({
      ...config,
      plugins: {
        pluginExample: {
          developerName: 'Stiven Hoking'
        }
      }
    });
    const pluginInstance = player.plugins.pluginExample;

    // Do
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();

    // Expect
    expect(pluginInstance.config.developerName).equal('Stiven Hoking');
  });
});
