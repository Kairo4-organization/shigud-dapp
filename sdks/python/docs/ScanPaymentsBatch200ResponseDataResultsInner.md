# ScanPaymentsBatch200ResponseDataResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** |  | [optional] 
**label** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 
**data** | [**ScanPaymentsBatch200ResponseDataResultsInnerData**](ScanPaymentsBatch200ResponseDataResultsInnerData.md) |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments_batch200_response_data_results_inner import ScanPaymentsBatch200ResponseDataResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsBatch200ResponseDataResultsInner from a JSON string
scan_payments_batch200_response_data_results_inner_instance = ScanPaymentsBatch200ResponseDataResultsInner.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsBatch200ResponseDataResultsInner.to_json())

# convert the object into a dict
scan_payments_batch200_response_data_results_inner_dict = scan_payments_batch200_response_data_results_inner_instance.to_dict()
# create an instance of ScanPaymentsBatch200ResponseDataResultsInner from a dict
scan_payments_batch200_response_data_results_inner_from_dict = ScanPaymentsBatch200ResponseDataResultsInner.from_dict(scan_payments_batch200_response_data_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


