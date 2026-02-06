# ScanPayments200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**List[ScanPayments200ResponseDataPaymentsInner]**](ScanPayments200ResponseDataPaymentsInner.md) |  | [optional] 
**scanned** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments200_response_data import ScanPayments200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPayments200ResponseData from a JSON string
scan_payments200_response_data_instance = ScanPayments200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ScanPayments200ResponseData.to_json())

# convert the object into a dict
scan_payments200_response_data_dict = scan_payments200_response_data_instance.to_dict()
# create an instance of ScanPayments200ResponseData from a dict
scan_payments200_response_data_from_dict = ScanPayments200ResponseData.from_dict(scan_payments200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


