	var linebreak="<br />"
	var x = 1;
		function skipMultiples() 
		{
			for (var x = 1; x <= 50; x++) 
			{
				if (x % 7 === 0) 
					{
						document.write("...nobody gives you power. You just take it.~Roseanne Barr");
						document.write(linebreak);
					} 
					else 
					{
						document.write(x);
						document.write(linebreak);
					}
			}
		} 
		skipMultiples();