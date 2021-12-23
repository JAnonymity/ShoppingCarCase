const vm=new Vue(
{
	el:'#purchase',
	data:{
		books: [
			{
				id:1,
				name: 'WEB前端中级',
				date: '2016-05-02',				
				price:85.00,
				count:1
			}, 
			{
				id:2,
				name: 'WEB前端初级',
				date: '2016-05-02',								
				price:59.00,
				count:1
			}, 
			{
				id:3,
				name: 'JS从入门到精通',
				date: '2016-05-01',								
				price:39.00,
				count:1
			}, 
			{
				id:4,
				name: 'C语言程序设计',
				date: '2016-05-03',					
				price:37.00,
				count:1
			},
		]
	},
	computed:{
		totalPrice()
		{
			let sum=0;
			
			for(i=0;i<this.books.length;i++)				
			{
				sum+=this.books[i].price*this.books[i].count;
			}
			
			return sum;
		}
	},
	methods:{
		increasment(index)			
		{
			this.books[index].count++;
		},			
		decreasment(index)
		{
			this.books[index].count--;
		},
		remove_Handled(index)			
		{
			this.books.splice(index,1);
		}		
	},
	filters:{
		showPrice(price)			
		{
			return '￥'+price.toFixed(2);
		}
	}
});