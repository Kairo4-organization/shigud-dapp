# NearTransferData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**receiver_id** | **str** |  | 
**actions** | [**List[NearTransferDataActionsInner]**](NearTransferDataActionsInner.md) |  | 
**token_contract** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.near_transfer_data import NearTransferData

# TODO update the JSON string below
json = "{}"
# create an instance of NearTransferData from a JSON string
near_transfer_data_instance = NearTransferData.from_json(json)
# print the JSON string representation of the object
print(NearTransferData.to_json())

# convert the object into a dict
near_transfer_data_dict = near_transfer_data_instance.to_dict()
# create an instance of NearTransferData from a dict
near_transfer_data_from_dict = NearTransferData.from_dict(near_transfer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


