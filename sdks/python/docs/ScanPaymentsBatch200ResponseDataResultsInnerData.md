# ScanPaymentsBatch200ResponseDataResultsInnerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | **List[object]** |  | [optional] 
**scanned** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments_batch200_response_data_results_inner_data import ScanPaymentsBatch200ResponseDataResultsInnerData

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsBatch200ResponseDataResultsInnerData from a JSON string
scan_payments_batch200_response_data_results_inner_data_instance = ScanPaymentsBatch200ResponseDataResultsInnerData.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsBatch200ResponseDataResultsInnerData.to_json())

# convert the object into a dict
scan_payments_batch200_response_data_results_inner_data_dict = scan_payments_batch200_response_data_results_inner_data_instance.to_dict()
# create an instance of ScanPaymentsBatch200ResponseDataResultsInnerData from a dict
scan_payments_batch200_response_data_results_inner_data_from_dict = ScanPaymentsBatch200ResponseDataResultsInnerData.from_dict(scan_payments_batch200_response_data_results_inner_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


