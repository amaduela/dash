// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   'vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      plot:           [   'vendor/flot/jquery.flot.js',
                          'vendor/flot/jquery.flot.pie.js', 
                          'vendor/flot/jquery.flot.resize.js',
                          'vendor/flot.tooltip/js/jquery.flot.tooltip.js',
                          'vendor/flot.orderbars/js/jquery.flot.orderBars.js',
                          'vendor/flot-spline/js/jquery.flot.spline.js'],
      knob:           [   'vendor/jquery-knob/dist/jquery.knob.min.js', 'js/jq/chart-knobs.js'],
      isotobe:          [  'js/uport_isotobe.js',
                            'js/uport_isotobe_script.js'],
      dataTable:      [   'vendor/datatables/media/js/jquery.dataTables.min.js',
                          'vendor/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          'vendor/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      footable:       [ 'vendor/footable/dist/footable.all.min.js',
                          'vendor/footable/css/footable.core.css'],
      fullcalendar:   [   'vendor/moment/moment.js',
                          'vendor/fullcalendar/dist/fullcalendar.min.js',
                          'vendor/fullcalendar/dist/fullcalendar.css',],
      vectorMap:      [   'vendor/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          'vendor/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          'vendor/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          'vendor/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      sortable:       [   'vendor/html5sortable/jquery.sortable.js'],
      nestable:       [   'vendor/nestable/jquery.nestable.js'],
      moment:         [   'vendor/moment/moment.js'],
      daterangepicker:[   'vendor/moment/moment.js',
                          'vendor/bootstrap-daterangepicker/daterangepicker.js',
                          'vendor/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [ 'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'],
      jqueryui:        [  'vendor/jquery-ui/ui/minified/jquery-ui.min.js',
                          'vendor/jquery-ui/themes/smoothness/jquery-ui.css',
                          'js/controllers/ui.slider.js'],
      TouchSpin:      [   'vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          'vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      chosen:         [   'vendor/chosen/chosen.jquery.min.js',
                          'vendor/bootstrap-chosen/bootstrap-chosen.css'],
      wysiwyg:        [   'vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      sparkline:       [   'vendor/jquery.sparkline/dist/jquery.sparkline.retina.js']
    }
  )

  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngMorris',
                  files: [
                      'vendor/raphael/raphael.js',
                      'vendor/mocha/mocha.js',
                      'vendor/morrisjs/morris.js',
                      'vendor/ngmorris/src/ngMorris-full.js',
                      'vendor/morrisjs/morris.css'
                  ]
              },
              {
                  name:'cgNotify',
                  files: [
                      'vendor/angular-notify/dist/angular-notify.min.js',
                      'vendor/angular-notify/dist/angular-notify.min.css'
                  ]
              },
              {
                  name:'countTo',
                  files: [
                      'vendor/angular-count-to/build/angular-count-to.min.js'
                  ]
              },
                                      
              {
                  name:'angularFileUpload',
                  files: [
                    'vendor/angular-file-upload/dist/angular-file-upload.min.js'
                  ]
              },
              /*{
                  name: 'textAngular',
                  series: true,
                  files: [
                      'vendor/textAngular/dist/textAngular.css',
                      'vendor/textAngular/dist/textAngular-rangy.min.js',
                      'vendor/textAngular/dist/textAngular.min.js'
                  ]
              },*/
              {
                  name: 'vr.directives.slider',
                  files: [
                      'vendor/venturocket-angular-slider/build/angular-slider.min.js',
                      'vendor/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'ngGrid',
                  files: [
                      'vendor/ng-grid/build/ng-grid.min.js',
                      'vendor/ng-grid/ng-grid.min.css',
                      'vendor/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      'vendor/angular-ui-grid/ui-grid.min.js',
                      'vendor/angular-ui-grid/ui-grid.min.css'
                  ]
              },
              {
                  name: 'chart.js',
                  files: [
                      'vendor/angular-chart.js/dist/angular-chart.js',
                      'vendor/angular-chart.js/dist/angular-chart.css'
                  ]

              },
              {
                  name: 'angular-rickshaw',
                  files: [
                    'vendor/rickshaw/rickshaw.min.css',
                    'vendor/rickshaw/rickshaw.min.js',
                    'vendor/angular-rickshaw/rickshaw.js'
                  ]

              },
              {
                  name: 'xeditable',
                  files: [
                      'vendor/angular-xeditable/dist/js/xeditable.min.js',
                      'vendor/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['vendor/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'vendor/ngImgCrop/compile/minified/ng-img-crop.js',
                      'vendor/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'colorpicker.module',
                  files: [
                      'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
                      'vendor/angular-bootstrap-colorpicker/css/colorpicker.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      'vendor/angular-smart-table/dist/smart-table.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'vendor/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'vendor/videogular-controls/vg-controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'vendor/videogular-buffering/vg-buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'vendor/videogular-overlay-play/vg-overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'vendor/videogular-poster/vg-poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'vendor/videogular-ima-ads/vg-ima-ads.min.js'
                  ]
              }
          ]
      });
  }])
;
