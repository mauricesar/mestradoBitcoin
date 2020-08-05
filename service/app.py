from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
#from sklearn.externals import joblib
import os
import joblib
import numpy as np

flask_app = Flask(__name__)

app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Bitcoin Market Value Tool", 
		  description = "Predicts the market value of bitcoins!")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'open': fields.Float(required = True, 
				  							   description="Open", 
    					  				 	   help="Open cannot be blank"),
				  'high': fields.Float(required = True, 
				  							   description="High", 
    					  				 	   help="High cannot be blank"),
				  'low': fields.Float(required = True, 
				  							description="Low", 
    					  				 	help="Low cannot be blank"),
					'close': fields.Float(required = True, 
				  							description="Close", 
    					  				 	help="Close cannot be blank"),
					'volume': fields.Float(required = True, 
				  							   description="Volume", 
    					  				 	   help="Volume cannot be blank"),						  

classifier = joblib.load('knn_clf.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			print(data)
			prediction = classifier.predict(np.array(data))
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "The Bitcoin Market Value must be: " + prediction
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)