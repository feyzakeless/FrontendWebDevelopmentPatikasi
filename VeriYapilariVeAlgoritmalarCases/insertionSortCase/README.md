<h1 align="center">Insertion Sort Algorithm Questions and Solutions</h1>

### Questions 1

* [22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.
3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

### Solutions 1

1. 1. 22 ile 2 yer değişir [2,27,16,22,18,6]
   2. 27 ile 6 yer değişir [2,6,16,22,18,27]
   3. 22 ile 18 yer değişir [2,6,16,18,22,27]
2. Big-O = O(n²)
3. Worst Case : O(n²)
   Average Case : O(n²)
   Best Case : O(n)
4. 18; Average Case



### Questions 2

* [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

### Solutions 2

1. 7 ile 2 yer değiştirir [2,3,5,8,7,9,4,15,6]
2.	5 ile 4 yer değiştirir [2,3,4,8,7,9,5,15,6]
3.	8 ile 5 yer değiştirir [2,3,4,5,7,9,8,15,6]
4.	7 ile 6 yer değiştirir [2,3,4,5,6,9,8,15,7]

