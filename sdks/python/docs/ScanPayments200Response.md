# ScanPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ScanPayments200ResponseData**](ScanPayments200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.scan_payments200_response import ScanPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ScanPayments200Response from a JSON string
scan_payments200_response_instance = ScanPayments200Response.from_json(json)
# print the JSON string representation of the object
print(ScanPayments200Response.to_json())

# convert the object into a dict
scan_payments200_response_dict = scan_payments200_response_instance.to_dict()
# create an instance of ScanPayments200Response from a dict
scan_payments200_response_from_dict = ScanPayments200Response.from_dict(scan_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


