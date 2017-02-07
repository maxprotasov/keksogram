'use strict';

(function From() {
  var upLoadOverlay = document.querySelector('.upload-overlay'),
      upLoadFile = document.querySelector('#upload-file'),
      upLoadCancel = document.querySelector('.upload-form-cancel'),
      upLoadFilter = document.querySelector('#upload-filter'),
      filterControls = document.querySelector('.upload-filter-controls'),
      upLoadFilters = filterControls.querySelectorAll('input[name="upload-filter"]'),
      imagePreview = upLoadFilter.querySelector('.filter-image-preview'),
      upLoadResizeInc =  upLoadFilter.querySelector('.upload-resize-controls-button-inc'),
      upLoadResizeDec = upLoadFilter.querySelector('.upload-resize-controls-button-dec'),
      upLoadResizeValue = upLoadFilter.querySelector('.upload-resize-controls-value'),
      previousFilterName = getRadioValue(upLoadFilters),
      activeFilterName;



  upLoadFile.addEventListener('change', function () {
    upLoadOverlay.classList.remove('invisible');
    upLoadFile.classList.add('invisible');
  });
  upLoadCancel.addEventListener('click', function () {
    upLoadOverlay.classList.add('invisible');
    upLoadFile.classList.remove('invisible');
  });

  upLoadResizeValue.value = '100%';

  upLoadResizeInc.addEventListener('click', function () {
    if (upLoadResizeValue.value !== '100%') {
      changeScale(25);
    }
  });

  upLoadResizeDec.addEventListener('click', function () {
    if (upLoadResizeValue.value !== '25%') {
      changeScale(-25);
    }
  });
  function changeScale(scale) {
    upLoadResizeValue.value = (parseInt(upLoadResizeValue.value, 10) + scale) + '%';
    imagePreview.style.transform = 'scale(' + parseInt(upLoadResizeValue.value, 10) / 100 + ')';
  }

  upLoadFilter.addEventListener('change', function () {
    activeFilterName = getRadioValue(upLoadFilters);

    if (activeFilterName !== 'none') {
      imagePreview.classList.add('filter-' + activeFilterName);
    }
    if (previousFilterName !== 'none') {
      imagePreview.classList.remove('filter-' + previousFilterName);
    }
    previousFilterName = activeFilterName;
  });

  function getRadioValue(radioSet) {
    for (var i = 0; i < radioSet.length; i++) {
      if (radioSet[i].checked) {
        return radioSet[i].value;
      }
    }
    return '';
  }

})();
