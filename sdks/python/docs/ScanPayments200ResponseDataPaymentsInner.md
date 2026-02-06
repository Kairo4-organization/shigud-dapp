# ScanPayments200ResponseDataPaymentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stealth_address** | **str** |  | [optional] 
**ephemeral_public_key** | **str** |  | [optional] 
**tx_signature** | **str** |  | [optional] 
**slot** | **int** |  | [optional] 
**timestamp** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments200_response_data_payments_inner import ScanPayments200ResponseDataPaymentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPayments200ResponseDataPaymentsInner from a JSON string
scan_payments200_response_data_payments_inner_instance = ScanPayments200ResponseDataPaymentsInner.from_json(json)
# print the JSON string representation of the object
print(ScanPayments200ResponseDataPaymentsInner.to_json())

# convert the object into a dict
scan_payments200_response_data_payments_inner_dict = scan_payments200_response_data_payments_inner_instance.to_dict()
# create an instance of ScanPayments200ResponseDataPaymentsInner from a dict
scan_payments200_response_data_payments_inner_from_dict = ScanPayments200ResponseDataPaymentsInner.from_dict(scan_payments200_response_data_payments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


