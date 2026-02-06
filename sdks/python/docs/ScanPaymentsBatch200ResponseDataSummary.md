# ScanPaymentsBatch200ResponseDataSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_key_pairs** | **int** |  | [optional] 
**total_payments_found** | **int** |  | [optional] 
**transactions_scanned** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments_batch200_response_data_summary import ScanPaymentsBatch200ResponseDataSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsBatch200ResponseDataSummary from a JSON string
scan_payments_batch200_response_data_summary_instance = ScanPaymentsBatch200ResponseDataSummary.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsBatch200ResponseDataSummary.to_json())

# convert the object into a dict
scan_payments_batch200_response_data_summary_dict = scan_payments_batch200_response_data_summary_instance.to_dict()
# create an instance of ScanPaymentsBatch200ResponseDataSummary from a dict
scan_payments_batch200_response_data_summary_from_dict = ScanPaymentsBatch200ResponseDataSummary.from_dict(scan_payments_batch200_response_data_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


