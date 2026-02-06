# ScanPaymentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewing_private_key** | **str** | 0x-prefixed 32-byte hex string | 
**spending_public_key** | **str** | 0x-prefixed 32-byte hex string | 
**from_slot** | **int** |  | [optional] 
**to_slot** | **int** |  | [optional] 
**limit** | **int** |  | [optional] [default to 100]

## Example

```python
from sipher_client.models.scan_payments_request import ScanPaymentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPaymentsRequest from a JSON string
scan_payments_request_instance = ScanPaymentsRequest.from_json(json)
# print the JSON string representation of the object
print(ScanPaymentsRequest.to_json())

# convert the object into a dict
scan_payments_request_dict = scan_payments_request_instance.to_dict()
# create an instance of ScanPaymentsRequest from a dict
scan_payments_request_from_dict = ScanPaymentsRequest.from_dict(scan_payments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


