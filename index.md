## 쿠팡 데이터 연동
> 매일 AM 08:00 UPDATE

### Quick Start
````
1. id 등록 <등록 후 다음날 오전8시부터 사용가능>
2. name : "본인닉네임" 입력  | exam) justin
3. 바로가기 클릭
````
#### id 입력
id : <input type="text" id="name">


## 카테고리별 인기상품
 
|코드|명칭|바로가기|
|--------|-------|--------|
|1001|여성패션| <a href="javascript:void(0);" class="categori_btn" data-code="1001">바로가기</a> |
|1002|남성패션| <a href="javascript:void(0);" class="categori_btn" data-code="1002">바로가기</a> |
|1003|베이비패션 (0~3세)| <a href="javascript:void(0);" class="categori_btn" data-code="1003">바로가기</a> |
|1004|여아패션 (3세 이상)| <a href="javascript:void(0);" class="categori_btn" data-code="1004">바로가기</a> |
|1005|남아패션 (3세 이상)| <a href="javascript:void(0);" class="categori_btn" data-code="1005">바로가기</a> |
|1006|스포츠패션| <a href="javascript:void(0);" class="categori_btn" data-code="1006">바로가기</a> |
|1007|신발| <a href="javascript:void(0);" class="categori_btn" data-code="1007">바로가기</a> |
|1008|가방/잡화| <a href="javascript:void(0);" class="categori_btn" data-code="1008">바로가기</a> |
|1010|뷰티| <a href="javascript:void(0);" class="categori_btn" data-code="1010">바로가기</a> |
|1011|출산/유아동| <a href="javascript:void(0);" class="categori_btn" data-code="1011">바로가기</a> |
|1012|식품| <a href="javascript:void(0);" class="categori_btn" data-code="1012">바로가기</a> |
|1013|주방용품| <a href="javascript:void(0);" class="categori_btn" data-code="1013">바로가기</a> |
|1014|생활용품| <a href="javascript:void(0);" class="categori_btn" data-code="1014">바로가기</a> |
|1015|홈인테리어| <a href="javascript:void(0);" class="categori_btn" data-code="1015">바로가기</a> |
|1016|가전디지털| <a href="javascript:void(0);" class="categori_btn" data-code="1016">바로가기</a> |
|1017|스포츠/레저| <a href="javascript:void(0);" class="categori_btn" data-code="1017">바로가기</a> |
|1018|자동차용품| <a href="javascript:void(0);" class="categori_btn" data-code="1018">바로가기</a> |
|1019|도서/음반/DVD| <a href="javascript:void(0);" class="categori_btn" data-code="1019">바로가기</a> |
|1020|완구/취미| <a href="javascript:void(0);" class="categori_btn" data-code="1020">바로가기</a> |
|1021|문구/오피스| <a href="javascript:void(0);" class="categori_btn" data-code="1021">바로가기</a> |
|1024|헬스/건강식품| <a href="javascript:void(0);" class="categori_btn" data-code="1024">바로가기</a> |
|1025|국내여행| <a href="javascript:void(0);" class="categori_btn" data-code="1025">바로가기</a> |
|1026|해외여행| <a href="javascript:void(0);" class="categori_btn" data-code="1026">바로가기</a> |
|1029|반려동물용품| <a href="javascript:void(0);" class="categori_btn" data-code="1029">바로가기</a> |

<br>

## Made by [jungjoongi.com](https://jungjoongi.com)

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
    $(".categori_btn").click(function(e) {
        e.preventDefault();
        var code = $(this).data("code");
        var name = $("#name").val();
        location.href = "/coupang/view/"+name+"/"+code;
    });
</script>