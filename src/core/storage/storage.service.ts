import {Preferences} from "@capacitor/preferences";
import {Language} from '../../shared/langue';

// stocke en local la langue courante
export async function setLangue() {
  await Preferences.set({
    key: 'langue',
    value: Language.value
  });
}

export async function getLangue() {
  return Preferences.get({key: 'langue'});
}
