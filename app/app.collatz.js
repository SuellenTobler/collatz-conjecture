
exports.index = function(req, res) {

	var num = req.body.collatzNumber; //validate if is null on frontend
	var seqArr = [];
	var seqStore = [];

	//calc collatz
	var numTemp, numStatus;

	for( i = num; i >= 1; i-- ){

		numTemp = parseInt(i);
		seqArr.push(numTemp);

		while( numTemp > 1 ){

			numStatus = numTemp % 2;

			if( numStatus === 0 ){
			numTemp = numTemp / 2;

			}else{
			numTemp = parseInt(3 * numTemp) + 1;

			}

			seqArr.push(numTemp);
		}
		seqStore.push(seqArr);
		seqArr = [];
	}

	//calc result
	var numRs, posSize = 0, posSizeTemp = 0, arrPoint = 0;

	for( i = 0; i < seqStore.length; i ++ ){

		posSizeTemp = seqStore[i].length;
		if(posSizeTemp > posSize){
			posSize = posSizeTemp;
			arrPoint = i;
		}
	}

	numRs = seqStore[arrPoint][0];

	console.log(' Resultado: '+ numRs);
	res.render('index', { collatzRs : ' Resultado: '+ numRs });

}	
  