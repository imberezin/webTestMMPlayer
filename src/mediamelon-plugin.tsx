import { BasePlugin, KalturaPlayer} from '@playkit-js/kaltura-player-js';
import {KALTURAPlayerMMSSIntgr} from 'mediamelon-kaltura-sdk'

export const pluginName = 'mediaMelonKPPlugin';

export class MediaMelonKPPlugin extends BasePlugin {
  public static defaultConfig: MediaMelonKPPluginConfig = {
    customerId: '',
    domainName: '',
    subscriberTag: '',
    subscriberId: '',
    subscriberType: '',
    playerName: '',
    playerVersion: '',
    playerBrand: '',
    playerModel: '',
    videoAssetInfo: {
      assetId: '',
      assetName: '',
      videoId: '',
      seriesTitle: '',
      episodeNumber: '',
      season: '',
      contentType: '',
      drmProtection: '',
      genre: ''      
    },
    appName: '',
    appVersion: '',
    deviceMarketingName: '',
    deviceId: '',
    videoQuality: '',
    customTags: {}
  };


  mmKalturaPlugin;
  constructor(name: string, player: KalturaPlayer, config: Object) {
    super(name, player, config);

    this.mmKalturaPlugin = new KALTURAPlayerMMSSIntgr();
    this.mmKalturaPlugin.setAdapter(player, config);
  }

  updateConfig(update: Object): void {
    super.updateConfig(update);
    this.mmKalturaPlugin.updateMMConfig(update);
  }

  public static isValid(): boolean {
    return true;
  }

}

export interface MediaMelonKPPluginConfig {  
  customerId: string;
  domainName: string;
  subscriberTag: string;
  subscriberId: string;
  subscriberType: string;
  playerName: string;
  playerVersion: string;
  playerBrand: string;
  playerModel: string;
  videoAssetInfo: {
    assetId: string;
    assetName: string;
    videoId: string;
    seriesTitle: string;
    episodeNumber: string;
    season: string;
    contentType: string;
    drmProtection: string;
    genre: string;
  }
  appName: string;
  appVersion: string;
  deviceMarketingName: string;
  deviceId: string;
  videoQuality: string;
  customTags: {}
};