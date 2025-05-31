document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  
  if (calendarEl) {
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'ja',
      height: 'auto',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listMonth'
      },
      buttonText: {
        today: '今日',
        month: '月',
        list: 'リスト'
      },
      events: [
        {
          title: 'わんわん撮影会',
          start: '2025-05-18',
          end: '2025-05-18',
          description: '愛犬と一緒に思い出の写真を！プロカメラマンが撮影します。'
        },
        {
          title: 'コーヒー豆焙煎体験',
          start: '2025-05-25',
          end: '2025-05-25',
          description: '自分だけのオリジナルブレンドを作ろう！'
        },
        {
          title: 'ドッグトレーニング教室',
          start: '2025-06-01',
          end: '2025-06-01',
          description: '犬のしつけや基本的なトレーニング方法を学びましょう。'
        },
        {
          title: 'カフェインレスコーヒー試飲会',
          start: '2025-06-08',
          end: '2025-06-08',
          description: '様々な種類のカフェインレスコーヒーを飲み比べできます！'
        },
        {
          title: 'わんちゃんお誕生日会',
          start: '2025-06-15',
          end: '2025-06-15',
          description: '愛犬のお誕生日をみんなでお祝いしましょう！犬用ケーキもご用意します。'
        }
      ],
      eventClick: function(info) {
        alert(info.event.title + '\n' + info.event.extendedProps.description);
      },
      // Google Calendar連携
      // この部分はGoogle Calendar APIのキーを取得後に有効化
      /*
      googleCalendarApiKey: 'YOUR_GOOGLE_API_KEY',
      eventSources: [
        {
          googleCalendarId: 'YOUR_CALENDAR_ID@group.calendar.google.com',
          className: 'gcal-event'
        }
      ],
      */
    });
    
    calendar.render();
  }
});