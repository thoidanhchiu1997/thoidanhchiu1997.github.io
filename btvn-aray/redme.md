# ARRAY METHODS
## concat()
concat() được sử dụng khi bạn muốn gộp nhiều mảng lại với nhau, phương thức này sẽ trả về một mảng mới.

Cú pháp: array1.concat(array2, array3, ..., arrayX). Trong đó array2, array3, ..., arrayX là các mảng bạn muốn gộp lại với mảng array1.
## copyWithin()
copyWithin() được sử dụng khi bạn muốn trích một đoạn trong mảng và ghi đè vào một đoạn khác trong chính mảng đó.

Cú pháp: array.copyWithin(target, start, end). Trong đó:

* target: Vị trí bắt đầu ghi đè.
* start: Không bắt buộc, là vị trí bắt đầu của mảng muốn trích, mặc định là 0. 
* end: Không bắt buộc, là vị trí kết thúc của mảng muốn trích, mặc định là độ dài của mảng. 
Lưu ý: copyWithin() sẽ không bao giờ làm thay đổi số lượng phần tử có trong mảng.

```
// Copy toàn bộ mảng và ghi đè từ vị trí thứ 2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2);
console.log(fruits)  // ["Banana", "Orange", "Banana", "Orange"]
 
// Copy các phần tử từ vị trí 2 tới vị trí 4 sau đó ghi đè từ vị trí 0
var samsungPhones = ["galaxy s1", "galaxy s2", "galaxy s3", "galaxy s4", "galaxy s5"];
samsungPhones.copyWithin(0, 2, 4);
console.log(samsungPhones); // ["galaxy s3", "galaxy s4", "galaxy s3", "
```
## pop()
pop() phương thức xóa phần tử cuối cùng khỏi một mảng
## push()
push() Phương thức thêm một phần tử mới vào một mảng (ở cuối)
##  shift()
shift()Phươngthức này loại bỏ phần tử mảng đầu tiên và "chuyển" tất cả các phần tử khác xuống một chỉ số thấp hơn.
## unshift()
unshift()Phươngthức thêm một phần tử mới vào một mảng (ở đầu) và "chuyển" tất cả các phần tử khác tăng lên một chỉ số cao hơn.
## splice()
splice() Phương thức này có thể được sử dụng để thêm các mục mới vào một mảng
Cú pháp của nó như sau:
```
array.splice(index, howMany, [element1][, ..., elementN]);
```
index − Chỉ mục tại đó bắt đầu thay đổi mảng.
howMany − Số integer chỉ dẫn số phần tử cũ của mảng để gỡ bỏ. Nếu howMany là 0, không có phần tử nào bị gỡ.
element1, ..., elementN − Phần tử thêm vào mảng đó. Nếu bạn không xác định bất kỳ phần tử nào, phương thức splice đơn giản chỉ gỡ bỏ các phần tử trong mảng.
## slice() 
Phương thức array slice() trong Javascript trích (extract) một khu vực của một mảng và trả về một mảng mới.

Cú pháp Array slice() trong JavaScript
Cú pháp của nó như sau:
```
array.slice( begin [,end] );
```
Chi tiết về tham số

begin − Chỉ mục trên cơ sở tại đó bắt đầu hành động extract. Nếu là chỉ mục phủ định, chỉ dẫn một offset từ cuối dãy.
end − Chỉ mục trên cơ sở tại đó kết thúc hành động extract.
Trả về giá trị

Trả về mảng đã trích dựa trên các tham số đã truyền.
## Array sort() 
Phương thức array sort() trong Javascript sắp xếp phân loại các phần tử trong mảng.

Cú pháp Array sort() trong JavaScript
Cú pháp của nó như sau:
```
array.sort( compareFunction );
```
Chi tiết về tham số

compareFunction − Xác định hàm mà định nghĩa sự sắp xếp. Nếu bị bỏ qua, nó sắp xếp theo thứ tự như trong từ điển.
Trả về giá trị

Trả về mảng đã sắp xếp

# Strings Methods
## String charAt() trong JavaScript
Phương thức charAt() trả về ký tự từ chỉ mục (index) đã xác định.

Các ký tự trong một chuỗi được lập chỉ mục từ trái qua phải. Chỉ mục của ký tự đầu tiên là 0, và chỉ mục của ký tự cuối trong một chuỗi, được gọi là stringName, là stringName.length – 1.

Cú pháp String charAt() trong JavaScript
Sử dụng cú pháp sau để tìm ký tự tại một chỉ mục cụ thể.
```
string.charAt(index);
```
Chi tiết về tham số

index − Một integer giữa 0 và một số nhỏ hơn độ dài của chuỗi.
Trả về giá trị

Trả về ký tự từ chỉ mục đã xác định.
## String concat() trong JavaScript
Phương thức String concat() trong JavaScript so khớp hai hoặc nhiều chuỗi và trả về một chuỗi đơn mới.

Cú pháp String concat() trong JavaScript
Cú pháp của nó như sau:
```
string.concat(string2, string3[, ..., stringN]);
```
Chi tiết về tham số

string2...stringN − Là các chuỗi để được so khớp với nhau.
Trả về giá trị

Trả về một chuỗi đã so khớp đơn.
## String indexOf() trong JavaScript
Phương thức String indexOf() trong JavaScript này trả về chỉ mục trong đối tượng String đang gọi của sự xảy ra đầu tiên của giá trị đã cho, bắt đầu tìm kiếm tại fromIndex hoặc -1 nếu giá trị không được tìm thấy.

Cú pháp String indexOf() trong JavaScript
Sử dụng cú pháp sau để dùng phương thức indexOf().
```
string.indexOf(searchValue[, fromIndex])
```
Chi tiết về tham số

searchValue − Một chuỗi biểu diễn giá trị để tìm kiếm.

fromIndex − Vị trí trong chuỗi đang gọi để bắt đầu tìm kiếm. Nó có thể là bất kỳ giá trị integer nào giữa 0 và độ dài chuỗi. Giá trị mặc định là 0.
Trả về giá trị

Trả về chỉ mục của sự kiện được tìm thấy, nếu không tìm thấy là -1.
## String replace() trong JavaScript
Phương thức String replace() trong JavaScript tìm một sự so khớp giữa một Regular Expression và một chuỗi, và đổi vị trí chuỗi phụ đã so khớp với một chuỗi phụ mới.
Cú pháp String replace() trong JavaScript
Cú pháp sử dụng phương thức replace() như sau:
```
string.replace(regexp/substr, newSubStr/function[, flags]);
```
Chi tiết về tham số

regexp − Một đối tượng RegExp. so khớp được đổi vị trí bởi giá trị trả về của tham số #2.
substr − Một String mà là được để đổi vị trí bởi newSubStr.
newSubStr − String mà đổi vị trí cho chuỗi phụ đã nhận từ tham số #1.
Hàm − Một hàm để được gọi để tạo chuỗi phụ mới.
flags − Một String chứa bất kỳ sự so khớp nào của RegExp với các flag:
g – so khớp Global,
i – bỏ qua (ignore),
m – so khớp qua nhiều dòng (Multiline). Tham số này chỉ được sử dụng nếu tham số đầu tiên là một chuỗi.
Trả về giá trị

Nó trả về một chuỗi mới được thay đổi.
## String toLowerCase() trong JavaScript
Phương thức String toLowerCase() trong JavaScript trả về giá trị chuỗi đang gọi được biến đổi thành kiểu chữ thường.

Cú pháp String toLowerCase() trong JavaScript
Cú pháp của nó như sau:
```
string.toLowerCase( )
```
## String toUpperCase() trong JavaScript
Phương thức String toUpperCase() trong JavaScript trả về giá trị chuỗi đang gọi được biến đổi thành kiểu chữ hoa.

Cú pháp String toUpperCase() trong JavaScript
Cú pháp của nó như sau:
```
string.toUpperCase( )
```
## String toString() trong JavaScript
Phương thức String toString() trong JavaScript trả về một chuỗi biểu diễn đối tượng đã xác định.

Cú pháp String toString() trong JavaScript
Cú pháp của nó như sau:
```
string.toString( )
```
Trả về giá trị

Trả về một chuỗi biểu diễn đối tượng đã xác định.
## String.trim()
Hàm trim () loại bỏ bất kỳ ký tự khoảng trống nào từ cả đầu và cuối của một chuỗi cụ thể.