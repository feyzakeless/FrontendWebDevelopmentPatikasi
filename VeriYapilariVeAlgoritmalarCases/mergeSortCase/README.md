<h1 align="center">Merge Sort Algorithm Questions and Solutions</h1>

### Questions

* [16,21,11,8,12,22] -> Merge Sort

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.

### Solutions

1. 1. Dizi ikiye bölünür. [16,21,11] [8,12,22]
   2. Her iki taraf tekrar ikiye bölünür. [16,21] [11] ve [8,12] [22]
   3. Tekrar ikiye bölünür, tek kalan aşamaya gelinmiş olur. [16] [21] [11] ve [8] [12] [22]
   4. Tekrar ikili gruplanır, fakat gruplanırken küçükten büyüğe sıralanır. [16,21] [11] ve [8,12] [22]
   5. Tekrar küçükten büyüğe gruplanır. [11,16,21] [8,12,22]
   6. Tekrar gruplanır ve küçükten büyüğe sıralama sağlanmış olur. [8,11,12,16,21,22]
2. Big-O = O(nlogn)
