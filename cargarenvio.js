
function initMap() {
    const mapOptions = {
      zoom: 11,
      center: { lat: 37.4221, lng: -122.0841 },
      mapTypeControl: false,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true
    };

    const map = new google.maps.Map(document.getElementById("gmp-map"), mapOptions);
    const map2 = new google.maps.Map(document.getElementById("gmp-map2"), mapOptions);

    const marker1 = new google.maps.Marker({ map: map, draggable: false });
    const marker2 = new google.maps.Marker({ map: map2, draggable: false });

    const input1 = document.getElementById('location-input');
    const input2 = document.getElementById('location-input2');
    const input2Locality = document.getElementById('locality-input2');
    const input2AdminArea = document.getElementById('administrative_area_level_1-input2');
    const input2PostalCode = document.getElementById('postal_code-input2');
    const input2Country = document.getElementById('country-input2');

    const autocomplete1 = new google.maps.places.Autocomplete(input1, {
      fields: ["address_components", "geometry", "name"],
      types: ["address"]
    });

    const autocomplete2 = new google.maps.places.Autocomplete(input2, {
      fields: ["address_components", "geometry", "name"],
      types: ["address"]
    });

    autocomplete1.addListener('place_changed', function () {
      const place = autocomplete1.getPlace();
      if (!place.geometry) {
        window.alert('No details available for input: \'' + place.name + '\'');
        return;
      }
      renderAddress(place, marker1);
      fillInAddress(place);
    });

    autocomplete2.addListener('place_changed', function () {
      const place = autocomplete2.getPlace();
      if (!place.geometry) {
        window.alert('No details available for input: \'' + place.name + '\'');
        return;
      }
      renderAddress(place, marker2);
      fillInAddress(place);
    });

    function fillInAddress(place) {
      // Función para llenar los campos de dirección si es necesario
      input2Locality.value = place.address_components.find(component => component.types.includes('locality'))?.long_name || '';
      input2AdminArea.value = place.address_components.find(component => component.types.includes('administrative_area_level_1'))?.short_name || '';
      input2PostalCode.value = place.address_components.find(component => component.types.includes('postal_code'))?.short_name || '';
      input2Country.value = place.address_components.find(component => component.types.includes('country'))?.long_name || '';
    }

    function renderAddress(place, marker) {
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    }
  }