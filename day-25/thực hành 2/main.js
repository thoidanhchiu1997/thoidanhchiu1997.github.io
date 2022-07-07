// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
$(".add").click(function(){
    let value = $(`input`).val()
    
    $("li").last().after(`<li>${value}</li>`)
  });
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
$(".remove").click(function(){
    
    $("li").last().remove()(`<li>${value}</li>`)
  });
// Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide