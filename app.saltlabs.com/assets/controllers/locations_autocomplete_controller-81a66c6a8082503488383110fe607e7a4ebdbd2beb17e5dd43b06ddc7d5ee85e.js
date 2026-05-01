import { Autocomplete } from 'stimulus-autocomplete';

export default class extends Autocomplete {
  static values = { locations: Array };

  buildURL(query) {
    const url = new URL(this.urlValue, window.location.href);
    url.searchParams.append(this.queryParamValue, query);

    // Append locations to the URL
    if (this.hasLocationsValue) {
      this.locationsValue.forEach(location => {
        url.searchParams.append('locations[]', location);
      });
    }

    return url.toString();
  }
}
;
