
// 리셋 버튼
$(function() {
	$('#reset').click(function() {
		$('#write_reply').find('textarea').val('').focus();
	});
});



// 클릭 시 다른 페이지로 이동
$(document).on('click', '[id^=member]', function() {
    const targetPage = 'members.html'; 
    const memberId = $(this).attr('id'); // 클릭된 요소의 ID 가져오기
    let scrollToPosition;

    // 각 멤버 ID에 따라 스크롤 위치 지정
    switch (memberId) {
        case 'member1':
            scrollToPosition = 300;
            break;
        case 'member2':
            scrollToPosition = 930;
            break;
        case 'member3':
            scrollToPosition = 1570;
            break;
        case 'member4':
            scrollToPosition = 2200;
            break;
        case 'member5':
            scrollToPosition = 2850;
            break;
        default:
            scrollToPosition = 0; // 기본값
    }

    // 페이지 이동
    window.location.href = `${targetPage}?scrollTo=${scrollToPosition}`;
});


