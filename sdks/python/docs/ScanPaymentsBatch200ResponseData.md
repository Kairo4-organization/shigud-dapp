# ScanPaymentsBatch200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[ScanPaymentsBatch200ResponseDataResultsInner]**](ScanPaymentsBatch200ResponseDataResultsInner.md) |  | [optional] 
**summary** | [**ScanPaymentsBatch200ResponseDataSummary**](ScanPaymentsBatch200ResponseDataSummary.md) |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments_batch200_response_data import ScanPaymentsBatch200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsBatch200ResponseData from a JSON string
scan_payments_batch200_response_data_instance = ScanPaymentsBatch200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsBatch200ResponseData.to_json())

# convert the object into a dict
scan_payments_batch200_response_data_dict = scan_payments_batch200_response_data_instance.to_dict()
# create an instance of ScanPaymentsBatch200ResponseData from a dict
scan_payments_batch200_response_data_from_dict = ScanPaymentsBatch200ResponseData.from_dict(scan_payments_batch200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


