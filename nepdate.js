/*
 * Copyright (C) 2011 Shritesh Bhattarai shriteshb@gmail.com
 * This program is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License version 3, as published 
 * by the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranties of 
 * MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR 
 * PURPOSE.  See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along 
 * with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function Nepdate()
{
   /*
     * Script to convert B.S. date to A.D. and vice versa
     * 
     *  
	 * - bs_equiv, ad_equiv : equivalent dates for calculation
	 * - bs : an array containing the number of days in each month of the B.S. year
	 *   
	 * About The Script:
	 * 	- Calculation will be done by counting the days from two equivalent A.D. and B.S. days
	 *  - Only two functions bs2ad and ad2bs are available for external use.
	 *  - Data will be sent and recieved as array in the form [year,month,day]
	 *  - Range: 1944 A.D. to 2033 A.D. | 2000 B.S. to 2089 B.S.
	 *  
	 */
	
	var bs_equiv = [2000,9,17];
	var ad_equiv = [1944,1,1];
	var bs = new Array();
	bs[2000]=[30,32,31,32,31,30,30,30,29,30,29,31];
    bs[2001]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2002]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2003]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2004]=[30,32,31,32,31,30,30,30,29,30,29,31];
    bs[2005]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2006]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2007]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2008]=[31,31,31,32,31,31,29,30,30,29,29,31];
    bs[2009]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2010]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2011]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2012]=[31,31,31,32,31,31,29,30,30,29,30,30];
    bs[2013]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2014]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2015]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2016]=[31,31,31,32,31,31,29,30,30,29,30,30];
    bs[2017]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2018]=[31,32,31,32,31,30,30,29,30,29,30,30];
    bs[2019]=[31,32,31,32,31,30,30,30,29,30,29,31];
    bs[2020]=[31,31,31,32,31,31,30,29,30,29,30,30];
    bs[2021]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2022]=[31,32,31,32,31,30,30,30,29,29,30,30];
    bs[2023]=[31,32,31,32,31,30,30,30,29,30,29,31];
    bs[2024]=[31,31,31,32,31,31,30,29,30,29,30,30];
    bs[2025]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2026]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2027]=[30,32,31,32,31,30,30,30,29,30,29,31];
    bs[2028]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2029]=[31,31,32,31,32,30,30,29,30,29,30,30];
    bs[2030]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2031]=[30,32,31,32,31,30,30,30,29,30,29,31];
    bs[2032]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2033]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2034]=[31,32,31,32,31,30,30,30,29,29,30,31]; 
    bs[2035]=[30,32,31,32,31,31,29,30,30,29,29,31];
    bs[2036]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2037]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2038]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2039]=[31,31,31,32,31,31,29,30,30,29,30,30];
    bs[2040]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2041]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2042]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2043]=[31,31,31,32,31,31,29,30,30,29,30,30];
    bs[2044]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2045]=[31,32,31,32,31,30,30,29,30,29,30,30];
    bs[2046]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2047]=[31,31,31,32,31,31,30,29,30,29,30,30];
    bs[2048]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2049]=[31,32,31,32,31,30,30,30,29,29,30,30];
    bs[2050]=[31,32,31,32,31,30,30,30,29,30,29,31];
    bs[2051]=[31,31,31,32,31,31,30,29,30,29,30,30];
    bs[2052]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2053]=[31,32,31,32,31,30,30,30,29,29,30,30];
    bs[2054]=[31,32,31,32,31,30,30,30,29,30,29,31];
    bs[2055]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2056]=[31,31,32,31,32,30,30,29,30,29,30,30];
    bs[2057]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2058]=[30,32,31,32,31,30,30,30,29,30,29,31];
    bs[2059]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2060]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2061]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2062]=[30,32,31,32,31,31,29,30,29,30,29,31];
    bs[2063]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2064]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2065]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2066]=[31,31,31,32,31,31,29,30,30,29,29,31];
    bs[2067]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2068]=[31,31,32,32,31,30,30,29,30,29,30,30];
    bs[2069]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2070]=[31,31,31,32,31,31,29,30,30,29,30,30];
    bs[2071]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2072]=[31,32,31,32,31,30,30,29,30,29,30,30];
    bs[2073]=[31,32,31,32,31,30,30,30,29,29,30,31];
    bs[2074]=[31,31,31,32,31,31,30,29,30,29,30,30];
    bs[2075]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2076]=[31,32,31,32,31,30,30,30,29,29,30,30];
    bs[2077]=[31,32,31,32,31,30,30,30,29,30,29,31];
    bs[2078]=[31,31,31,32,31,31,30,29,30,29,30,30];
    bs[2079]=[31,31,32,31,31,31,30,29,30,29,30,30];
    bs[2080]=[31,32,31,32,31,30,30,30,29,29,30,30];
    bs[2081]=[31,31,32,32,31,30,30,30,29,30,30,30];
    bs[2082]=[30,32,31,32,31,30,30,30,29,30,30,30];
    bs[2083]=[31,31,32,31,31,30,30,30,29,30,30,30];
    bs[2084]=[31,31,32,31,31,30,30,30,29,30,30,30];
    bs[2085]=[31,32,31,32,30,31,30,30,29,30,30,30];
    bs[2086]=[30,32,31,32,31,30,30,30,29,30,30,30];
    bs[2087]=[31,31,32,31,31,31,30,30,29,30,30,30];
    bs[2088]=[30,31,32,32,30,31,30,30,29,30,30,30];
    bs[2089]=[30,32,31,32,31,30,30,30,29,30,30,30];
    bs[2090]=[30,32,31,32,31,30,30,30,29,30,30,30]; 
    
    function check_ad_range(ad_date)
    {
    	/*
    	 * Function to check whether the given date is within computational range
    	 * 
    	 * ad_date : A.D. date as array in the form [year,month,day]
    	 * 
    	 */
    	
    	var year = ad_date[0];
    	var month = ad_date[1];
    	var day = ad_date[2];
    	if ((year < 1944) || (year > 2033) || (month < 1) || (month > 12) || (day < 1) || (day > 31))
    	{
    		return false;
    	}
    	else
    	{
    		return true;
    	}
    }
    
    function check_bs_range(bs_date)
    {
    	/*
    	 * Function to check whether the given date is within computational range
    	 * 
    	 * ad_date : B.S. date as array in the form [year,month,day]
    	 * 
    	 */
    	
    	var year = bs_date[0];
    	var month = bs_date[1];
    	var day = bs_date[2];
    	if ((year < 2000) || (year > 2089) || (month < 1) || (month > 12) || (day < 1) || (day > 32))
    	{
    		return false;
    	}
    	else
    	{
    		return true;
    	}
    }
    
    
    function date_from_array(array)
    {
    	/*
    	 * Function to obtain a date object from the given array
    	 * 
    	 * array : Array in the form [year,month,day]
    	 */
    	var year = array[0];
    	var month = array[1] - 1;
    	var day = array[2];
    	var date = new Date(year,month,day);
    	return date;
    }
    
    function array_from_date(date)
    {
    	/*
    	 * Function to obtain an array in the form [year,month,day] from the given date.
    	 * 
    	 * date : date object 
    	 */
    	var year = date.getFullYear(); 
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var array = [year,month,day]; 
		return array;

    }
    
    function count_ad_days(begin_ad,end_ad)
    {
    	/*
    	 * Function to count the days between the begin_ad and end_ad
    	 * 
    	 * begin_ad : beginning A.D. date as array in the form [year,month,day]
    	 * end_ad : end A.D. date as array in the form [year,month,day]
    	 * 
    	 */
    	var begin_date = date_from_array(begin_ad);
    	var end_date = date_from_array(end_ad);
    	var delta = end_date - begin_date;
    	return Math.ceil(delta / (1000 * 60 * 60 * 24)); //Anyone suggest a better way ???
    }
    
    function count_bs_days(begin_bs,end_bs)
   {
   		/*
   		 * Function to count the days between begin_bs and end_bs
   		 * 
   		 * begin_bs : beginning B.S. date as array in the form [year,month,day]
   		 * end_bs : end B.S. date as array in the form [year,month,day]
   		 * 
   		 * Logic:
   		 * 	- Add all the days in all years within the range.
   		 *  - From the first year, subtract each month till the specified month
   		 *  - Subtract the begin day itself
   		 *  - From the last year, subtract each month from the specified month
   		 *  - Add the end day
   		 */
   		var begin_year = begin_bs[0];
   		var begin_month = begin_bs[1];
   		var begin_day = begin_bs[2];
   		var end_year = end_bs[0];
   		var end_month = end_bs[1];
   		var end_day = end_bs[2];
   		var days = 0;
   		
   		//Add all the days in all years within the range.
   		for (var year = begin_year; year <= end_year; year++)
   		{
   			for (var month in bs[year])
   			{
   				days = days + bs[year][month];
   			}
   		}
   		//From the first year, subtract each month till the specified month
   		for (var month = 0; month < begin_month - 1; month++)
   		{
   			days = days - bs[begin_year][month];
   		}
   		//Subtract the begin day itself
   		days = days - begin_day;
   		//From the last year, subtract each month from the specified month
   		for (var month = end_month - 1; month < 12; month++)
   		{
   			days = days - bs[end_year][month];
   		}
   		//Add the end day
   		days = days + end_day;
   		return days;
   }
    
    function add_ad_days(ad_date,days)
    {
    	/*
    	 * Function to add the given number of days to ad_date
    	 * 
    	 * ad_date : A.D. date as array in the form [year,month,day]
    	 * days : number of days to add
    	 * 
    	 */
    	var date = date_from_array(ad_date);
    	var day = date.getDate();
    	date.setDate(day + days);
    	return array_from_date(date);
    }
    
    function add_bs_days(bs_date,days)
    {
    	/*
    	 * Function to add the given number of days to bs_days
    	 * 
    	 * bs_date : B.S. date as array in the form [year, month,day]
    	 * days : number of days to add
    	 * 
    	 * Logic:
    	 * 	- Add the extra number of days to the original days.
    	 *  - Until the number of days becomes applicable to the current month, subtract the days by the number of days in the current month and increase the month
    	 * 	- If month reaches 12, increase the year by 1 and set the month to 1
    	 */
    	var year = bs_date[0];
   		var month = bs_date[1];
   		var day = bs_date[2];
   		//Add the extra number of days to the original days.
   		day = day + days;
   		//Until the number of days becomes applicable to the current month, subtract the days by the number of days in the current month and increase the month
   		while (day > bs[year][month - 1])
   		{
   			day = day - bs[year][month - 1];
   			month = month + 1;
   			//If month reaches 12, increase the year by 1 and set the month to 1
   			if (month > 12)
   			{	
   				month = 1;
   				year = year + 1;
   			}
   		}
   		return [year,month,day];
    }
    
    function ad2bs(ad_date)
    {
    	/*
    	 * Function to convert date from A.D. to B.S.
    	 * 
    	 * ad_date : A.D. date as array in the form [year, month,day]
    	 * 
    	 */
    	if (check_ad_range(ad_date))
    	{

               for(var i=0; i<ad_date.length;i++) ad_date[i] = parseInt(ad_date[i]);

    		var delta = count_ad_days(ad_equiv,ad_date);
    		var bs_date = add_bs_days(bs_equiv,delta);
    		return bs_date;
    	}
    	else
    	{
    		
    		return false;
    	}
    }
    	
    function bs2ad(bs_date)
    {
    	/*
    	 * Function to convert date from B.S.to A.D.
    	 * 
    	 * bs_date : B.S. date as array in the form [year, month,day]
    	 * 
    	 */
    	if (check_bs_range(bs_date))
    	{

               for(var i=0; i<bs_date.length;i++) bs_date[i] = parseInt(bs_date[i]);

    		var delta = count_bs_days(bs_equiv,bs_date);
    		var ad_date = add_ad_days(ad_equiv,delta);
    		return ad_date;
    	}
    	else
    	{
    		return false;
    	}
    }
    
    //The callable methods
    this.ad2bs = ad2bs;
    this.bs2ad = bs2ad;
}
